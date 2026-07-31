import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
