import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
