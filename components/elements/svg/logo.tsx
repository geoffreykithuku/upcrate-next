import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React from "react";
import { useScrollPosition } from "../../../hooks/use-scroll-position";

export function Logo() {
  const { scrollTop } = useScrollPosition();

  return (
    <div
      className="relative"
      style={{ height: 50, marginTop: scrollTop > 0 ? -16 : 0 }}
    >
      <LayoutGroup>
        <AnimatePresence>
          {scrollTop > 0 ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 78.253 86.665"
              width={50}
              className="fill-current text-purple-dark p-2 absolute top-0"
            >
              <motion.g
                id="Group_328"
                data-name="Group 328"
                transform="translate(-204.833 -98.729)"
              >
                <motion.path
                  d="M271.151,128.555l.073,19.416-25.036,2.364-.929-25.139-39.349-5.1,3.34,65.3,70.968-2.991,1.8-52.439Zm-38.474,20.923-12.939-.854-.073-19.336,13.846-.053Z"
                  animate={{
                    scale: [0, 1],
                    rotate: [-90, 0],
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.path
                  d="M205.564,113.312l76.654,10.75.868-25.333-78.253.295Z"
                  animate={{
                    scale: [0, 1],
                    rotate: [90, 0],
                  }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                />
              </motion.g>
            </motion.svg>
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="150px"
              height="100%"
              viewBox="0 0 228.342 74.454"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              style={{ top: 8 }}
              className="absolute"
            >
              <motion.path
                d="M4837.927-2444.341l-25.99,2.927-17.988-5.257-3.708,58.442h8.351l2.341-29.254,11,2.2,25.99-3.385Z"
                transform="translate(-4757.688 2462.683)"
                fill="#372152"
                initial={{
                  opacity: 1,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.path
                d="M4780.112-2423.725l-9.589.652-2.6-23.983h-8.42l2.6,32.39,26.429-1.11,2.117-31.28H4782.6Z"
                transform="translate(-4759.508 2462.66)"
                fill="#372152"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.path
                d="M4867.772-2426.049l-18.5-1.221v-10.074l16.817-.458-.306-8.869-25.367,2.013v25.8l27.813,1.666Z"
                transform="translate(-4754.719 2462.683)"
                fill="#372152"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.path
                d="M4880.334-2417.2l-.459-20.776,8.715-.153.917-7.311-18.8-1.236,1.07,29.475Z"
                transform="translate(-4752.926 2462.683)"
                fill="#372152"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.path
                d="M4910.726-2446.671l.052,4.229-18.3-2.856-2.293,28.1,20.714-2.286.231,3.66,8.562-.458-.764-30.391Zm-11.058,20.621.458-9.4,10.533.467.169,7.562Z"
                transform="translate(-4751.772 2462.683)"
                fill="#372152"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.path
                d="M4936.34-2444.976l.345-16.813h-7.338l-1.246,16.268-5.94-.393v7.174l5.379.506-1.557,22.848,9.785.355.417-22.389,9.061.852.918-7.819Z"
                transform="translate(-4749.88 2461.789)"
                fill="#372152"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.path
                d="M4955.661-2427.2l13.037-.458v-7.633l-12.349.458.388-3.327,18.842-.91-.306-8.869-25.442,2.458-3.669,29,30.641,2.137v-8.854l-21.523-1.186Z"
                transform="translate(-4748.459 2462.609)"
                fill="#372152"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.25 }}
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}
