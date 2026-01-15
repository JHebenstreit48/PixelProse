import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Actors = () => {
  const markdownFilePath = 'Languages/Swift/Basics/Concurrency/Actors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Actors (Intro)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Actors;
