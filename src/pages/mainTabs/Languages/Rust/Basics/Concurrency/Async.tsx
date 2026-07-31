import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
