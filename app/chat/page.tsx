const Chat = () => {
  return (
    <>
      <div className="flex">
        <div className="container w-96 h-screen bg-zinc-500">
          <div className="sidebar1 border border-r-red-400 ">
            <div className="profile">PROFILE AND CONTACT SCREEN</div>
          </div>
        </div>

        <div className="container w-full h-screen bg-slate-300">
          <div className="sidebar2">
            <div className="chat">CHAT SCREEN</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
