import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CodeCoverage = () => {
  const markdownFilePath = 'Engines/Unity/Testing/CIAndCoverage/CodeCoverage';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Code Coverage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeCoverage;
