import * as React from "react";
import { useState } from "react";
import { motion, Reorder, AnimatePresence } from "framer-motion";
import "./TabStyles.css";
import { AddIcon, CloseIcon } from "./TabIcons"; // Assuming you have these icon components in Icons.tsx
import { Typography } from "@mui/material";

export default function Tab() {
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const remove = (item: Business) => {
    if (item === selectedTab) {
      setSelectedTab(closestItem(tabs, item));
    }

    setTabs(removeItem(tabs, item));
  };

  const add = () => {
    const nextItem = getNextBusiness(tabs);

    if (nextItem) {
      setTabs([...tabs, nextItem]);
      setSelectedTab(nextItem);
    }
  };

  return (
    <div className="window">
      <nav>
        <Reorder.Group
          as="ul"
          axis="x"
          onReorder={setTabs}
          className="tabs"
          values={tabs}
        >
          <AnimatePresence initial={false}>
            {tabs.map((item) => (
              <InnerTab
                key={item.label}
                item={item}
                isSelected={selectedTab === item}
                onClick={() => setSelectedTab(item)}
                onRemove={() => remove(item)}
              />
            ))}
          </AnimatePresence>
        </Reorder.Group>
        <motion.button
          className="add-item"
          onClick={add}
          disabled={tabs.length === allBusinesses.length}
          whileTap={{ scale: 0.9 }}
        >
          <AddIcon />
        </motion.button>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className="tab-content"
          >
            {selectedTab ? (
              <>
                <img src={selectedTab.image} alt={selectedTab.label} className="tab-image" />
                <Typography variant="h5" component="h2" className="tab-description">
                  {selectedTab.description}
                </Typography>
              </>
            ) : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

interface Props {
  item: Business;
  isSelected: boolean;
  onClick: () => void;
  onRemove: () => void;
}

export interface Business {
  icon: string;
  label: string;
  image: string;
  description: string;
}

export const allBusinesses: Business[] = [
  {
    icon: "👥",
    label: "ニューラルHR",
    image: process.env.PUBLIC_URL + "/images/neural_hr.png",
    description: "脳科学とAIを使った直接的な人財と企業のマッチング",
  },
  {
    icon: "🧠",
    label: "精神状態のモニタリング",
    // image: process.env.PUBLIC_URL + "/images/neural_hr.png",
    image: process.env.PUBLIC_URL + "/images/mental_monitoring.png",
    description: "脳科学とAIを用いて感情やストレス値、疲労度を算出し、客観的に精神状態をモニタリング",
  },
  {
    icon: "🆘",
    label: "うつ傾向の捉え",
    image: process.env.PUBLIC_URL + "/images/depression_detection.png",
    description: "簡易的な脳波デバイスからうつ傾向を正確に判定するためのAIモデルの開発",
  },
  {
    icon: "🤖",
    label: "AIに関する受託開発",
    image: process.env.PUBLIC_URL + "/images/ai_development.png",
    description: "言語や画像のマルチモーダルなAIに関する受託開発",
  },
];

const [neuralHr, mentalMonitoring, depressionDetection, aiDevelopment] = allBusinesses;
export const initialTabs = [neuralHr, mentalMonitoring, depressionDetection, aiDevelopment];

export function getNextBusiness(
  businesses: Business[]
): Business | undefined {
  const existing = new Set(businesses);
  return allBusinesses.find((business) => !existing.has(business));
}

export function removeItem<T>([...arr]: T[], item: T) {
  const index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
  return arr;
}

export function closestItem<T>(arr: T[], item: T) {
  const index = arr.indexOf(item);
  if (index === -1) {
    return arr[0];
  } else if (index === arr.length - 1) {
    return arr[arr.length - 2];
  } else {
    return arr[index + 1];
  }
}

export const InnerTab = ({ item, onClick, onRemove, isSelected }: Props) => {
  return (
    <Reorder.Item
      value={item}
      id={item.label}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        backgroundColor: isSelected ? "#f3f3f3" : "#fff",
        y: 0,
        transition: { duration: 0.15 },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      whileDrag={{ backgroundColor: "#e3e3e3" }}
      className={isSelected ? "selected" : ""}
      onPointerDown={onClick}
    >
      <motion.span layout="position" className="label">{`${item.icon} ${item.label}`}</motion.span>
      <motion.div layout className="close">
        <motion.button
          onPointerDown={(event) => {
            event.stopPropagation();
            onRemove();
          }}
          initial={false}
          animate={{ backgroundColor: isSelected ? "#e3e3e3" : "#fff" }}
        >
          <CloseIcon />
        </motion.button>
      </motion.div>
    </Reorder.Item>
  );
};
