import { Button, cn } from "@club/ui";

export default function SignupButton({
  name,
  type = "primary"
}:{
  name: string,
  type: "primary" | "outline"
}) {
  return (
    <>
        <Button
            type="button"
            className={cn(`bg-gradient-to-t from-black from-20% to-[#3e3b3b] border-t border-[#636363] to-100% outline-[#414141] outline outline-1 h-[30px] text-sm tracking-normal px-2 py-1 rounded-[0.4rem] transition-all`,type === "outline" ? "border-none hover:bg-[#f3f3f3] bg-white border-[#7a7a7a] outline-none ring-0  bg-none text-black h-[28px]" : null)}
        >
            {name}
        </Button>
    </>
  );
}
