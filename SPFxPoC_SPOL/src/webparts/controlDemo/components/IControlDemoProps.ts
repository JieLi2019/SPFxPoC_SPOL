export interface IControlDemoProps {
  description: string;
  isEditing: boolean;
  toggleConfiguration: boolean;
  backgroundColor: string;
  testToggle: boolean;
  testTextarea: string;
  testCheckbox: boolean;
  testDropdown: string;
  testButton: string;
  testChoiceGroups: string;
  clickHandler: () => void;
}
