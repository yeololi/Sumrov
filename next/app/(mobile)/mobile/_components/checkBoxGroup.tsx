import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";

interface CheckboxProps {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  className?: string;
}

const Checkbox = ({
  id,
  label,
  isChecked,
  onChange,
  className,
}: CheckboxProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-[15px] h-[15px] bg-neutral-50 rounded-[3px] border border-neutral-300"
      />
      <label
        htmlFor={id}
        className="text-black dark:text-white text-[11px] font-medium font-pre"
      >
        {label}
      </label>
    </div>
  );
};

const CheckboxGroup = () => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false);

  const areAllCheckboxesChecked = () => isCheckedTerms && isCheckedPrivacy;

  const handleAllCheckboxChange = (isChecked: boolean) => {
    setIsCheckedAll(isChecked);
    setIsCheckedTerms(isChecked);
    setIsCheckedPrivacy(isChecked);
  };

  // 전체가 선택 안되면 자동으로 모두 동의 상태를 취소
  useEffect(() => {
    setIsCheckedAll(areAllCheckboxesChecked());
  }, [isCheckedTerms, isCheckedPrivacy]);

  return (
    <div className="flex flex-col justify-start items-start gap-[29px]">
      {}
      <Checkbox
        id="check1"
        label="모두 동의합니다"
        isChecked={isCheckedAll}
        onChange={handleAllCheckboxChange}
        className="gap-[9px] inline-flex"
      />

      {}
      <div className="flex-col justify-start items-start gap-[7px] flex">
        <div className="w-[335px] h-[15px] justify-start items-start gap-[191px] inline-flex">
          <Checkbox
            id="check2"
            label="[필수] 이용약관 동의"
            isChecked={isCheckedTerms}
            onChange={setIsCheckedTerms}
            className="gap-[7px] flex"
          />
          <label className="text-neutral-400 text-[9px] font-medium font-pre">
            약관보기
          </label>
        </div>
      </div>

      {}
      <div className="flex-col justify-start items-start gap-[7px] flex">
        <div className="w-[335px] h-[15px] justify-start items-start gap-[135px] inline-flex">
          <Checkbox
            id="check3"
            label="[필수] 개인정보 수집 및 이용 동의"
            isChecked={isCheckedPrivacy}
            onChange={setIsCheckedPrivacy}
            className="gap-2 flex"
          />
          <span className="text-neutral-400 text-[9px] font-medium font-pre">
            약관보기
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckboxGroup;
