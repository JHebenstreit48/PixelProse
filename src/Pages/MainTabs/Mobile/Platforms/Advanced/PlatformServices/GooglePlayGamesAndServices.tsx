import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
