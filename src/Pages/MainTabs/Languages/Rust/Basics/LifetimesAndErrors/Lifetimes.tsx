import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Lifetimes = () => {
  const markdownFilePath = 'Languages/Rust/Basics/LifetimesAndErrors/Lifetimes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Lifetimes (Intro)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lifetimes;
