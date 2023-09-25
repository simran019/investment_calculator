import Form from "./form/page";
import Header from "./header/page";


export default function Home() {


  return (
    <div className="w-full h-screen flex items-start justify-center py-6 font-bold">
      <div className="flex flex-col items-center justify-start gap-10 w-3/4 md:w-1/2 h-full">
        <Header/>
        <Form/>
      </div>
    </div>
  );
}
