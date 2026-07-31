import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Lifetimes = () => {
  const markdownFilePath = 'Languages/Rust/Basics/LifetimesAndErrors/Lifetimes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lifetimes (Intro)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lifetimes;
