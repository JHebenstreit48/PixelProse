import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
