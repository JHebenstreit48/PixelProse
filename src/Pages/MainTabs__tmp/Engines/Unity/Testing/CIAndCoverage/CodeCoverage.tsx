import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
