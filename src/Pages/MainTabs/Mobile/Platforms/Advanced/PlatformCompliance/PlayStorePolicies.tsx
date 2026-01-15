import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PlayStorePolicies = () => {
  const markdownFilePath = 'Mobile/Platforms/Advanced/PlatformCompliance/PlayStorePolicies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Play Store Policies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlayStorePolicies;
