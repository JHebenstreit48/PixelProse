import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PlatformOverview = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/IOSFundamentals/PlatformOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Platform Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlatformOverview;
