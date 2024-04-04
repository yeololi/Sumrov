"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Menu, Minus, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const initialTagsState = {
  size: [],
  color: [],
  mainImage: [],
  detailImage: [],
};

const initialInputsState = {
  title: "",
  price: "",
  sale: "",
  description: "",
  category: "top",
};

const yes = true;

const RegistrationPage = () => {
  const [tags, setTags] = useState<{
    size: string[];
    color: string[];
    mainImage: string[];
    detailImage: string[];
  }>(initialTagsState);

  const [inputs, setInputs] = useState(initialInputsState);

  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);

  const postFetch = async () => {
    const body = {
      title: inputs.title,
      price: inputs.price,
      sale: parseInt(inputs.sale),
      description: inputs.description,
      category: inputs.category,
      size: tags.size,
      color: tags.color,
      mainImage: tags.mainImage[0],
      detailImage: tags.detailImage,
    };

    const res = await fetch("/api/post/new", {
      method: "POST",
      body: JSON.stringify(body),
    }).then((r) => {
      console.log(r);
    });
  };

  const handleTagOperation = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
    operation: "add" | "remove"
  ) => {
    const inputElement = e.currentTarget
      .previousElementSibling as HTMLInputElement;

    if (!inputElement.innerText) return;

    const id = e.currentTarget.id as keyof typeof tags;
    const value = inputElement.value;

    if (operation === "add") {
      setTags((prevTags) => ({ ...prevTags, [id]: [value, ...prevTags[id]] }));
      inputElement.value = "";
    } else if (operation === "remove") {
      setTags((prevTags) => ({
        ...prevTags,
        [id]: prevTags[id].filter((tag) => tag !== inputElement.innerText),
      }));
    }
  };

  const addTag: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    handleTagOperation(e, "add");
  };

  const removeTag: React.MouseEventHandler<HTMLDivElement> = (e) => {
    handleTagOperation(e, "remove");
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [id]: value }));
  };

  const uploadToClient: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id } = e.target;

    if (createObjectURL) {
      URL.revokeObjectURL(createObjectURL);
    }

    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setTags((prevTags) => ({ ...prevTags, [id]: [i.name] }));

      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  return (
    <>
      <div className="w-full flex flex-col bg-neutral-50 pb-20">
        <div className="flex-col justify-center items-center inline-flex">
          <div className="pl-[505px] pr-[15px] py-[15px] bg-white justify-end items-center inline-flex">
            <div className="justify-start items-start gap-[465px] flex">
              <Link
                href="/"
                className="justify-center items-center gap-2.5 flex"
              >
                <img className="w-[22px] h-[22px]" src="images/logo.png" />
                <div className="text-neutral-900 text-xl font-semibold font-nav">
                  SUMROV
                </div>
              </Link>
              <X />
            </div>
          </div>
          <div className="w-[1125px] px-[350px] py-[15px] bg-zinc-600 border border-black justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-lg font-semibold font-pre">
              NOTICE
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-[74px] flex">
          <div className="border border-stone-300 border-t-0 flex-col w-[1125px] justify-center items-center flex">
            <div className="flex-col justify-center items-center gap-[10px] flex mt-[48px]">
              <div className="w-[700px] flex-col justify-center items-center gap-[10px] flex">
                <div className="w-[700px] flex-col  items-center flex">
                  <div className="text-black text-xl w-full font-semibold font-noto">
                    공지사항
                  </div>
                </div>
                <div className="w-[700px] h-[0px] border-2 border-gray-200" />
              </div>
              <div className="flex-col justify-center items-center gap-[74px] flex pb-10">
                <div className="h-[438px] flex-col justify-start items-start gap-6 mt-6 flex">
                  <StandardForm
                    value={inputs.title}
                    id="title"
                    onChange={onChange}
                    title="제목"
                    className="w-[550px] h-[30px]"
                  />

                  <div className="w-[700px] justify-between items-center flex">
                    <div
                      className={"w-[109.47px] text-sm font-normal font-noto"}
                    >
                      내용 입력
                    </div>

                    <textarea
                      className={
                        "bg-white w-[550px] h-[252px] dark:text-white rounded-sm dark:bg-zinc-800 border placeholder:text-neutral-300 text-black text-[14px] font-normal font-pre pl-2 border-neutral-300"
                      }
                      onChange={(e) => {
                        const { id, value } = e.target;
                        setInputs((prevInputs) => ({
                          ...prevInputs,
                          [id]: value,
                        }));
                      }}
                      value={inputs.description}
                      id="description"
                    />
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200" />
                  <div className="h-[145px] flex-col justify-center items-start gap-[23px] flex">
                    <div className="w-[700px] justify-between items-center flex">
                      <div
                        className={"w-[109.47px] text-sm font-normal font-pre"}
                      >
                        메인 이미지
                      </div>

                      <label htmlFor="mainImage">
                        <div
                          className={cn(
                            "bg-white dark:text-white rounded-sm dark:bg-zinc-800 border placeholder:text-neutral-300 text-black text-[14px] font-medium font-pre pl-2 border-neutral-300",
                            "w-[550px] h-[30px] cursor-pointer"
                          )}
                        />
                      </label>
                      <input
                        type="file"
                        id="mainImage"
                        className="hidden"
                        onChange={uploadToClient}
                      />
                    </div>
                    <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                    <div className="justify-start items-center flex">
                      <div className="justify-start items-center gap-6 flex">
                        {tags.mainImage.map((mainImages, i) => (
                          <Tag
                            onClick={removeTag}
                            title={mainImages}
                            key={i}
                            id="color"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  </div>
                </div>

                <div className="text-center text-black text-[22px] mt-16 font-medium font-noto">
                  미리보기
                </div>
                <div className=" border border-gray-200 flex-col justify-center items-center gap-10 inline-flex ">
                  <div className="flex-col justify-center items-center gap-[20px] flex">
                    <div className="w-[940px] h-[46px] pr-[795px] pt-[15px] pb-4 border-b border-gray-200 justify-start items-center inline-flex">
                      <div className="self-stretch pl-[25px] justify-center items-center inline-flex">
                        <div className="text-black text-xs font-light font-['Inter'] uppercase">
                          2022-04-05 21:36:16
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-center items-center flex">
                      <div className="w-[890px] text-black text-sm font-light font-['Pretendard'] uppercase tracking-wide">
                        <br />
                        안녕하세요.
                        <br />
                        SUMROV입니다.
                        <br />
                        <br />
                        <br />
                        행정각부의 장은 국무위원 중에서 국무총리의 제청으로
                        대통령이 임명한다.
                        <br />
                        형사피고인은 유죄의 판결이 확정될 때까지는 무죄로
                        추정된다.
                        <br />
                        탄핵결정은 공직으로부터 파면함에 그친다. <br />
                        그러나, 이에 의하여 민사상이나 형사상의 책임이
                        면제되지는 아니한다.
                        <br /> 모든 국민은 학문과 예술의 자유를 가진다. <br />
                        정부는 회계연도마다 예산안을 편성하여 회계연도 개시
                        90일전까지 국회에 제출하고,
                        <br /> 국회는 회계연도 개시 30일전까지 이를 의결하여야
                        한다. <br />
                        헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에
                        붙여 국회의원선거권자 과반수의 투표와 투표자 과반수의
                        찬성을 얻어야 한다.
                        <br /> 근로자는 근로조건의 향상을 위하여 자주적인
                        단결권·단체교섭권 및 단체행동권을 가진다.
                        <br />
                        <br />
                        <br />
                        누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의
                        조력을 받을 권리를 가진다. <br />
                        다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는
                        법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
                        <br /> 국가는 평생교육을 진흥하여야 한다. 국가는 여자의
                        복지와 권익의 향상을 위하여 노력하여야 한다. <br />
                        평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
                        민주평화통일자문회의를 둘 수 있다. <br />
                        대통령·국무총리·국무위원·행정각부의 장·헌법재판소
                        재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원
                        기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나
                        법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수
                        있다.
                        <br />
                      </div>
                      <br />
                      <br />
                      <img
                        className="w-[680px] h-[680px]"
                        src="https://via.placeholder.com/680x680"
                      />
                      <br />
                      <br />
                      <div className="w-[890px] h-[102px] text-black text-sm font-light font-['Pretendard'] uppercase tracking-wide">
                        누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의
                        조력을 받을 권리를 가진다. <br />
                        다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는
                        법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
                        <br /> 국가는 평생교육을 진흥하여야 한다. 국가는 여자의
                        복지와 권익의 향상을 위하여 노력하여야 한다. <br />
                        평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
                        민주평화통일자문회의를 둘 수 있다. <br />
                        대통령·국무총리·국무위원·행정각부의 장·헌법재판소
                        재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원
                        기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나
                        법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수
                        있다.
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-center items-center flex border-0">
                    <div className="justify-start border-[0.5px] border-t-[1px] items-start inline-flex w-full">
                      <div
                        className="h-[46px] pr-[110px] pt-3.5 pb-[15px] bg-zinc-100 border-gray-200 justify-start items-center flex border-r
                      "
                      >
                        <div className="self-stretch pl-[25px] justify-center items-center inline-flex">
                          <div className="text-black text-sm font-light font-['Pretendard'] tracking-wider text-nowrap">
                            제목
                          </div>
                        </div>
                      </div>
                      <div className="w-[841px] h-[46px] pr-[664px] pt-[14.50px] pb-[15.50px] justify-start items-center flex">
                        <div className="self-stretch pl-[15px] justify-center items-center inline-flex ">
                          <div className="text-black text-[13px] font-normal font-['Inter'] uppercase ">
                            2월 BEST REVIEW EVENT !
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="  justify-start border-[0.5px] items-start inline-flex w-full">
                      <div className="pr-[95px] pt-3.5 pb-[15px] bg-zinc-100  justify-start items-center flex border-r">
                        <div className="self-stretch pl-[25px] justify-center items-center inline-flex ">
                          <div className="text-black text-sm font-light font-['Pretendard'] tracking-wider text-nowrap">
                            작성자
                          </div>
                        </div>
                      </div>
                      <div className="w-[841px] h-[46px] pr-[769px] pt-[14.50px] pb-[15.50px] justify-start items-center flex">
                        <div className="w-[841px] h-[46px] pr-[769px] pt-[14.50px] pb-[15.50px] justify-start items-center inline-flex">
                          <div className="self-stretch pl-[15px] justify-center items-center inline-flex">
                            <div className="text-black text-[13px] font-normal font-['Inter'] uppercase">
                              sumrov
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-[15px] flex">
                  <div className="justify-center items-center gap-[25px] inline-flex"></div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="w-[700px] h-[50px] px-[234px] py-[9px] bg-black justify-center items-center gap-2.5 inline-flex"
            onClick={postFetch}
          >
            <div className="text-center text-white text-base font-semibold font-noto">
              업로드
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

const StandardForm = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ title, className, ...props }, ref) => {
  return (
    <div className="w-[700px] justify-between items-center flex">
      <div className={"w-[109.47px] text-sm font-normal font-noto"}>
        {title}
      </div>

      <input
        className={cn(
          "bg-white dark:text-white rounded-sm dark:bg-zinc-800 border placeholder:text-neutral-300 text-black text-[11px] font-normal font-pre pl-2 border-neutral-300",
          className
        )}
        {...props}
      />
    </div>
  );
});
StandardForm.displayName = "StandardForm";

const ActiveForm = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>(({ title, className, value, children, ...props }, ref) => {
  return (
    <div className="w-[700px] justify-between items-center flex">
      <div className={"w-[109.47px] text-sm font-normal font-noto"}>
        {title}
      </div>
      <input
        className={cn(
          "bg-white dark:text-white rounded-sm dark:bg-zinc-800 border placeholder:text-neutral-300 text-black text-[14px] font-medium font-pre pl-2 border-neutral-300",
          className
        )}
      />
      <Button
        variant={"ghost"}
        className="h-[26px] font-noto hover:bg-inherit active:hover:bg-inherit"
        {...props}
      >
        추가
      </Button>
    </div>
  );
});
ActiveForm.displayName = "ActiveForm";

const Tag = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ title, ...props }, ref) => {
  return (
    <div className="justify-center items-center gap-[19px] flex h-[26px] px-2 border-[1px] rounded-md border-neutral-400">
      <Menu className="h-4 w-4" />
      <div className="text-neutral-600 text-[13px] font-bold font-pre">
        {title}
      </div>
      <div className="cursor-pointer" {...props}>
        <X className="h-4 w-4" />
      </div>
    </div>
  );
});
Tag.displayName = "Tag";

export default RegistrationPage;
