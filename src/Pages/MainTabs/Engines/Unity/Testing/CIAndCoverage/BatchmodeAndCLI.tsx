import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BatchmodeAndCLI = () => {
  const markdownFilePath = 'Engines/Unity/Testing/CIAndCoverage/BatchmodeAndCLI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Batchmode & CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BatchmodeAndCLI;
