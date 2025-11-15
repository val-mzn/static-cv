const Profile = () => {
    return (
        <section>
          <div className="w-36 h-36 ring-2 ring-slate-100 rounded-full mx-auto overflow-hidden">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover scale-125"
            />
          </div>
        </section>
    );
};

export default Profile;