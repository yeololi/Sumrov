import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";

// 체크박스 컴포넌트의 props 타입 정의
interface CheckboxProps {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  className?: string;
}

// 체크박스 컴포넌트
const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  isChecked,
  onChange,
  className,
}) => {
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

// 전체 선택 알고리즘을 포함한 부모 컴포넌트
const CheckboxGroup: React.FC = () => {
  // 체크박스들의 상태를 관리하는 state
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false);

  // 전체가 선택되었는지 확인
  const areAllCheckboxesChecked = () => isCheckedTerms && isCheckedPrivacy;

  // 전체 선택 체크박스를 클릭할 때 발생하는 이벤트 핸들러
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
      {/* 전체 선택 체크박스 */}
      <Checkbox
        id="check1"
        label="모두 동의합니다"
        isChecked={isCheckedAll}
        onChange={handleAllCheckboxChange}
        className="gap-[9px] inline-flex"
      />

      {/* 이용약관 동의 체크박스 */}
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

      {/* 개인정보 수집 및 이용 동의 체크박스 */}
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
