import React from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const sortOptions = [
  { label: "Name (A–Z)", value: "name_asc" },
  { label: "Name (Z–A)", value: "name_desc" },
  { label: "Quantity (Low → High)", value: "qty_asc" },
  { label: "Quantity (High → Low)", value: "qty_desc" },
];

const SortDropdown: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Dropdown
      style={styles.dropdown}
      data={sortOptions}
      labelField="label"
      valueField="value"
      placeholder="Sort by..."
      value={value}
      onChange={(item) => onChange(item.value)}
    />
  );
};

export default SortDropdown;

const styles = StyleSheet.create({
  dropdown: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
});
