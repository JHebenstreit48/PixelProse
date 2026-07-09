import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GooglePlayGamesAndServices = () => {
  const markdownFilePath = 'Mobile/Platforms/Advanced/PlatformServices/GooglePlayGamesAndServices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Google Play Games & Services" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GooglePlayGamesAndServices;
