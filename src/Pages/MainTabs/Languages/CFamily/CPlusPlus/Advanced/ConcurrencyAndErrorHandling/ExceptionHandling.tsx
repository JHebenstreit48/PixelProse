import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExceptionHandling = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Advanced/ConcurrencyAndErrorHandling/ExceptionHandling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Exception Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExceptionHandling;
