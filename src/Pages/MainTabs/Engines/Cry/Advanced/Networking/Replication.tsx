import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Replication = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Networking/Replication';

  return (
    <>
      <PageLayout>
        <PageTitle title="Replication" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Replication;
