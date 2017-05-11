/**
 * Created by maximedenoun on 2017-05-07.
 */
export class ProfileMock {
  static retrievedProfile() {
    return {
      GeneralInfo: {
        id: 286,
        file: '../assets/286.jpg',
        Email: "maximedenoun173@gmail.com",
        Name: 'Maxime1',
        Surname: 'Denoun1',
        AllowImageUsage: true,
        Biography: 'This is my biography1'
      },
      EmploymentInfo: {
        Company: ['Tech 500', 'Tech 501' ],
        Role: ['dev', 'public speaker']
      },
      Social: {
        Nationality: 'Israeli1',
        CityCountry: 'Ashdod - Israel1',
        Phone: '0506944081',
        Website: 'www.harbo.com1',
        Twitter: 'I don"t have twitter1',
        Facebook: 'I don"t have FB1',
        Linkedin: 'I don"t have it1',
        Git: 'https://github.com/mdenoun1',
      },
      Languages: {
        Primary: 'Hebrew',
        Secondary: 'English',
        Third: 'French',
        Fourth: 'Chinese'
      },
      CommunityInfo: {
        IsCommunityMember: 'true',
        Community: 'Angular'
      },
      Agreement: {
        Agrees: true,
      }
    }
  }
}
