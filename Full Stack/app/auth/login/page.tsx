import Login from "@/components/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import background from "../../../public/bg.png";
import Image from "next/image";

const ServerLogin = () => {
  return (
    <>
      <div className="z-10 w-screen h-[99vh] bg-black" />
      {/* <Image
        src={background}
        alt=""
        className="absolute left-1/3 top-1/2 z-20 mix-blend-color-burn"
      /> */}
      <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] z-20">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Login />
        </CardContent>
      </Card>
    </>
  );
};

export default ServerLogin;
