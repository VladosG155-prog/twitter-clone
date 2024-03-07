export interface IImageUploadProps {
  value: File | null;
  onChange: (e: File | null) => void;
}
