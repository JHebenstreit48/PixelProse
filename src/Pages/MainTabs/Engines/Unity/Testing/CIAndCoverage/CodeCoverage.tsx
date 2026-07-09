import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CodeCoverage = () => {
  const markdownFilePath = 'Engines/Unity/Testing/CIAndCoverage/CodeCoverage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Code Coverage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeCoverage;
