import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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

const CheckboxGroup = (isChecked: boolean) => {
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

  const handlePrivacySubmit = () => {
    setIsCheckedPrivacy(isChecked);
  };

  const handleTermsSubmit = () => {
    setIsCheckedTerms(isChecked);
  };

  return (
    <div className="flex flex-col justify-start items-start gap-[29px]">
      <Checkbox
        id="check1"
        label="모두 동의합니다"
        isChecked={isCheckedAll}
        onChange={handleAllCheckboxChange}
        className="gap-[9px] inline-flex"
      />

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
            <Drawer>
              <DrawerTrigger>약관보기</DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>[필수] 이용약관 동의</DrawerTitle>
                  <DrawerDescription className="text-[0.75rem] whitespace-pre-wrap">
                    `대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한
                    평화적 통일 정책을 수립하고 이를 추진한다. 탄핵소추의 의결을
                    받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.
                    훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한
                    특권도 이에 따르지 아니한다. 광물 기타 중요한
                    지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은
                    법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는
                    이용을 특허할 수 있다. 국회는 국가의 예산안을 심의·확정한다.
                    이 헌법에 의한 최초의 대통령의 임기는 이 헌법시행일로부터
                    개시한다. 국회의원은 국회에서 직무상 행한 발언과 표결에
                    관하여 국회외에서 책임을 지지 아니한다. 근로자는 근로조건의
                    향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을
                    가진다. 대통령후보자가 1인일 때에는 그 득표수가 선거권자
                    총수의 3분의 1 이상이 아니면 대통령으로 당선될 수 없다.
                    국회의 회의는 공개한다. 다만, 출석의원 과반수의 찬성이
                    있거나 의장이 국가의 안전보장을 위하여 필요하다고 인정할
                    때에는 공개하지 아니할 수 있다. 공공필요에 의한 재산권의
                    수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되,
                    정당한 보상을 지급하여야 한다.`
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button onClick={handleTermsSubmit}>약관 동의</Button>
                  </DrawerClose>

                  <DrawerClose>
                    <Button variant="outline">닫기</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </label>
        </div>
      </div>

      <div className="flex-col justify-start items-start gap-[7px] flex">
        <div className="w-[335px] h-[15px] justify-start items-start gap-[135px] inline-flex">
          <Checkbox
            id="check3"
            label="[필수] 개인정보 수집 및 이용 동의"
            isChecked={isCheckedPrivacy}
            onChange={setIsCheckedPrivacy}
            className="gap-2 flex"
          />
          <label className="text-neutral-400 text-[9px] font-medium font-pre">
            <Drawer>
              <DrawerTrigger>약관보기</DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>[필수] 이용약관 동의</DrawerTitle>
                  <DrawerDescription className="text-[0.75rem] whitespace-pre-wrap">
                    `대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한
                    평화적 통일 정책을 수립하고 이를 추진한다. 탄핵소추의 의결을
                    받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.
                    훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한
                    특권도 이에 따르지 아니한다. 광물 기타 중요한
                    지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은
                    법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는
                    이용을 특허할 수 있다. 국회는 국가의 예산안을 심의·확정한다.
                    이 헌법에 의한 최초의 대통령의 임기는 이 헌법시행일로부터
                    개시한다. 국회의원은 국회에서 직무상 행한 발언과 표결에
                    관하여 국회외에서 책임을 지지 아니한다. 근로자는 근로조건의
                    향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을
                    가진다. 대통령후보자가 1인일 때에는 그 득표수가 선거권자
                    총수의 3분의 1 이상이 아니면 대통령으로 당선될 수 없다.
                    국회의 회의는 공개한다. 다만, 출석의원 과반수의 찬성이
                    있거나 의장이 국가의 안전보장을 위하여 필요하다고 인정할
                    때에는 공개하지 아니할 수 있다. 공공필요에 의한 재산권의
                    수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되,
                    정당한 보상을 지급하여야 한다.`
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>
                    <DrawerClose>
                      <Button onClick={handlePrivacySubmit}>약관 동의</Button>
                    </DrawerClose>
                  </Button>
                  <DrawerClose>
                    <Button variant="outline">닫기</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxGroup;
