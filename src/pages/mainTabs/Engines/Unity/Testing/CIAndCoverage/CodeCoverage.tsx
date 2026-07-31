import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
