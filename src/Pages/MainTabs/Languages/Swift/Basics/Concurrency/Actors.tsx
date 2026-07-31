import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Actors = () => {
  const markdownFilePath = 'Languages/Swift/Basics/Concurrency/Actors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Actors (Intro)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Actors;
