export interface Show {
  name: string;
  description: string;
  genre: string;
  id: number;
  instance_id: number;
  record: number;
  url: string;
  image_path: string;
  starts: string;
  ends: string;
}

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;
