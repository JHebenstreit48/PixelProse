import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Async = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Concurrency/Async';

  return (
    <>
      <PageLayout>
        <PageTitle title="Async (Intro)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Async;
