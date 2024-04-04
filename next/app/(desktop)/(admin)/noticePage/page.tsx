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

    if (!inputElement) return;

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
          <div className="border border-stone-300 border-t-0 flex-col justify-center items-center flex">
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
                    <ActiveForm
                      id="mainImage"
                      title="상세 이미지"
                      className="w-[500px] h-[30px]"
                      onClick={addTag}
                    />
                    <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                    <div className="justify-start items-center flex">
                      <div className="justify-start items-center gap-6 flex">
                        {tags.mainImage.map((imaegs, i) => (
                          <Tag
                            onClick={removeTag}
                            title={imaegs}
                            key={i}
                            id="mainImage"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  </div>
                </div>

                <div className="text-center text-black text-[22px] font-medium font-noto">
                  미리보기
                </div>

                <div className="flex-col justify-start items-center gap-[15px] flex">
                  <div className="justify-center items-center gap-[25px] inline-flex">
                    <div className="w-[1125px] h-[733px] flex-col justify-center items-center gap-[50px] inline-flex">
                      <div className="flex-col justify-start items-start gap-5 flex">
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                          <div className="text-black dark:text-neutral-50 text-xl font-medium font-pre">
                            {inputs.title}
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[50px] flex">
                          <div className="flex-col justify-start items-start gap-[30px] flex">
                            <div className="w-[421px] text-neutral-600 dark:text-zinc-100 text-xs font-light font-pre whitespace-pre-wrap">
                              {inputs.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "flex-col justify-center items-center gap-[75px] flex",
                          yes && "gap-[30px]"
                        )}
                      >
                        {yes && (
                          <>
                            <div className="w-[299px] flex mt-3 flex-col">
                              <div className="flex flex-col">
                                <div className="text-neutral-600 dark:text-neutral-50 text-[10px] font-normal font-pre">
                                  Lorem ipsum dolor sit
                                </div>
                                <div className="text-neutral-600 dark:text-neutral-50 text-[10px] font-normal font-pre">
                                  -블랙/S
                                </div>
                              </div>
                              <div className="text-black dark:text-white text-[11px] font-semibold font-pre flex justify-end w-full">
                                KRW 10,000
                              </div>
                              <div className="flex gap-1">
                                <input
                                  placeholder="1"
                                  className="text-[10px] font-normal font-pre w-[37px] h-[18px] pl-2 rounded-sm border border-neutral-300 dark:bg-neutral-900"
                                />

                                <div className="w-[18px] h-[18px]">
                                  <Plus className="w-[18px] h-[18px] dark:text-black bg-neutral-300 rounded-sm" />
                                </div>
                                <div className="w-[18px] h-[18px]">
                                  <Minus className="w-[18px] h-[18px] dark:text-black bg-neutral-300 rounded-sm" />
                                </div>
                              </div>
                            </div>
                            <div className="w-[299px] h-3.5 justify-center items-start gap-[167px] inline-flex">
                              <div className="dark:text-white text-[11px] font-semibold font-pre">
                                총상품금액
                              </div>
                              <div className="w-[84px] flex justify-center items-center">
                                <div className="text-blue-500 text-[11px] font-semibold font-pre">
                                  KRW 10,000
                                </div>
                                <div className="text-blue-500 text-[10px] font-normal font-pre">
                                  (1개)
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                          <Button className="rounded-none hover:bg-neutral-900 w-[315px] h-[41px] py-3.5 bg-neutral-900 dark:bg-zinc-600 justify-center items-center inline-flex">
                            <div className="text-neutral-50 text-[11px] font-medium font-body">
                              Buy it Now
                            </div>
                          </Button>
                          <div className="w-[315px] h-[41px] py-3.5 border border-neutral-900 dark:border-zinc-600 justify-center items-center inline-flex">
                            <div className="text-black dark:text-neutral-50 text-[11px] font-medium font-body">
                              Add to Cart
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-10 flex">
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                  </div>
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
