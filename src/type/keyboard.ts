export type KeyboardKeyData = {
  alias: string
  description: string
  group: string
  keyCodes: string[]
  keyboardPosition?: { left?: boolean; right?: boolean }
}

export type KeyboardKeyName =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'alt'
  | 'altleft'
  | 'altright'
  | 'arrowdown'
  | 'arrowleft'
  | 'arrowright'
  | 'arrowup'
  | 'b'
  | 'backspace'
  | 'c'
  | 'capslock'
  | 'command'
  | 'commandleft'
  | 'commandright'
  | 'control'
  | 'controlleft'
  | 'controlright'
  | 'd'
  | 'delete'
  | 'e'
  | 'end'
  | 'enter'
  | 'escape'
  | 'f'
  | 'f1'
  | 'f10'
  | 'f11'
  | 'f12'
  | 'f2'
  | 'f3'
  | 'f4'
  | 'f5'
  | 'f6'
  | 'f7'
  | 'f8'
  | 'f9'
  | 'g'
  | 'h'
  | 'home'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'option'
  | 'optionleft'
  | 'optionright'
  | 'p'
  | 'pagedown'
  | 'pageup'
  | 'q'
  | 'r'
  | 's'
  | 'shift'
  | 'shiftleft'
  | 'shiftright'
  | 'space'
  | 't'
  | 'tab'
  | 'u'
  | 'v'
  | 'w'
  | 'windows'
  | 'windowsleft'
  | 'windowsright'
  | 'x'
  | 'y'
  | 'z'


export type KeyboardKeyMap = Record<KeyboardKeyName, KeyboardKeyData>;
