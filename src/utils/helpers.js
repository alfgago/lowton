export function handleMouseOver() {
  cursorState.setKey("isActive", true);
  isActive = true; // Update the local isActive for conditional usage
}

export function handleMouseLeave() {
  cursorState.setKey("isActive", false);
  isActive = false;
}
