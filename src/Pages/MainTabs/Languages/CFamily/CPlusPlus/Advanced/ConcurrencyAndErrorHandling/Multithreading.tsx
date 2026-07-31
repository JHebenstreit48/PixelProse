import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Multithreading = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Advanced/ConcurrencyAndErrorHandling/Multithreading';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multithreading" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Multithreading;
