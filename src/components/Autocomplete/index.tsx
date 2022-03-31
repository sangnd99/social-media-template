import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { usePopper } from "react-popper";
import { ModifierPhases } from "@popperjs/core";
import cn from "classnames";

import customStyles from "./Autocomplete.module.scss";
import Portal from "@common/HOC/Portal";
import { randomId } from "@common/functions/randomId";

export type IData = {
  _id?: string;
  value?: string;
  [key: string]: any;
};

interface IAutoCompleteProps {
  Element: React.ReactElement;
  data: IData[];
  selectedValue: IData | null;
  show: boolean;
  fieldLabel: string;
  handleShow: (state: boolean) => void;
  onChange: (value: IData) => void;
}

const AutoComplete: React.FC<IAutoCompleteProps> = ({
  Element,
  data,
  selectedValue,
  show,
  fieldLabel,
  handleShow,
  onChange,
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (show) setShouldRender(true);
  }, [show]);
  const handleAnimationEnd = () => {
    if (!show) setShouldRender(false);
  };

  // Popper.js
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );

  const modifiers = useMemo(
    () => [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
      {
        name: "sameWidth",
        enabled: true,
        phase: "beforeWrite" as ModifierPhases,
        requires: ["computeStyles"],
        fn({ state }) {
          state.styles.popper.minWidth = `${state.rects.reference.width}px`;
        },
        effect({ state }) {
          state.elements.popper.style.minWidth = `${state.elements.reference.offsetWidth}px`;
        },
      },
    ],
    [],
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers,
  });

  // Handle click outside
  const wrapperRef = useRef<HTMLUListElement>(null);
  const handleClickOutSide = useCallback(
    (e: Event) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        if (referenceElement && referenceElement.contains(e.target as Node))
          return;
        handleShow(false);
      }
    },
    [show],
  );

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        handleShow(false);
        break;
      case "ArrowDown":
        setActiveIndex((state) => {
          if (show) {
            ++state;
            if (state > data.length - 1) {
              return 0;
            }
          }
          return state;
        });
        break;
      case "ArrowUp":
        setActiveIndex((state) => {
          if (show) {
            --state;
            if (state < 0) {
              return data.length - 1;
            }
          }
          return state;
        });
        break;
      case "Enter":
        if (show && activeIndex !== -1) {
          onChange(data[activeIndex]);
          handleShow(false);
          setActiveIndex(-1);
        }
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide, { capture: true });
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("click", handleClickOutSide, {
        capture: true,
      });
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, [show, activeIndex]);

  // Scroll into view
  const scrollIntoView = (position: number) => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (activeIndex < 0 || activeIndex > data.length - 1) return;
    if (wrapperRef.current) {
      const listItem: HTMLElement[] = Array.from(
        wrapperRef.current.childNodes,
      ) as HTMLElement[];
      listItem[activeIndex] && scrollIntoView(listItem[activeIndex].offsetTop);
    }
  }, [activeIndex]);

  // Handle action
  const handleOpen = () => {
    handleShow(!show);
    setActiveIndex(-1);
  };

  const handleChange = (item: IData) => {
    onChange(item);
    handleShow(false);
    setActiveIndex(-1);
  };

  return (
    <>
      <div ref={setReferenceElement} onClick={handleOpen}>
        {Element}
      </div>
      <Portal>
        {shouldRender ? (
          <div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <ul
              className={customStyles.list}
              style={{
                animation: `${
                  show ? "fadein" : "fadeout"
                } 0.2s linear forwards`,
              }}
              onAnimationEnd={handleAnimationEnd}
              ref={wrapperRef}
            >
              {data.map((item, index) => (
                <li
                  className={cn(customStyles.item, {
                    [customStyles.active]: activeIndex === index,
                    [customStyles.selected]: selectedValue?._id === item._id,
                  })}
                  onClick={() => handleChange(item)}
                  key={randomId()}
                >
                  {item[fieldLabel]}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Portal>
    </>
  );
};

export default AutoComplete;
