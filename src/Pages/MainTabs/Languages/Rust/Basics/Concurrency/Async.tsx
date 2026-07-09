import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
