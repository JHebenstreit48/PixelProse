import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ReportsAndCoverage = () => {
  const markdownFilePath = 'Engines/Unreal/Testing/CIAndReports/ReportsAndCoverage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Reports & Coverage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReportsAndCoverage;
