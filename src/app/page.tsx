import Image from "next/image";
import Typography from "@mui/material/Typography";
import DailySelection from "@/components/DailySelection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-screen h-[50vh]">
        <Image src="https://picsum.photos/200/300" alt="Hero" fill />
        <div className="relative flex flex-col justify-center items-center h-full">
          <Typography color="white" variant="h1">
            Hello Michael
          </Typography>
          <Typography color="white" variant="h4">
            Your next meal submission will open in 2 days
          </Typography>
        </div>
      </div>
      <DailySelection />
    </main>
  );
}
