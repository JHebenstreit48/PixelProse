import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IOSReviewEdgeCases = () => {
  const markdownFilePath = 'Mobile/Platforms/Advanced/PlatformCompliance/IOSReviewEdgeCases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="iOS Review Edge Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IOSReviewEdgeCases;
