import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReportsAndCoverage = () => {
  const markdownFilePath = 'Engines/Unreal/Testing/CIAndReports/ReportsAndCoverage';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Reports & Coverage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReportsAndCoverage;
