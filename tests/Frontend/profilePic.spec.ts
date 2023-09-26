test("Users profile picture should display if present", () => {
    const userImage = "https://i.scdn.co/image/ab6775700000ee85357ee0eabf98dc740c83bb9c"
    const setProfilePic = userImage === undefined ? "https://i.ibb.co/WHfbS7L/logo.png" : userImage;
    expect(setProfilePic).toBe(userImage);
});

test("Logo displayed if user has not set profile picture", () => {
    const userImage = undefined
    const setProfilePic = userImage === undefined ? "https://i.ibb.co/WHfbS7L/logo.png" : userImage;
    expect(setProfilePic).toBe("https://i.ibb.co/WHfbS7L/logo.png");
});



