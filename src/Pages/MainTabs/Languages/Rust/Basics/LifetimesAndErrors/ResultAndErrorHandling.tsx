import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ResultAndErrorHandling = () => {
  const markdownFilePath = 'Languages/Rust/Basics/LifetimesAndErrors/ResultAndErrorHandling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Result & Error Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResultAndErrorHandling;
