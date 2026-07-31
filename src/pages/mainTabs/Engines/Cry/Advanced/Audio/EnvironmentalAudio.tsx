import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EnvironmentalAudio = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Audio/EnvironmentalAudio';

  return (
    <>
      <PageLayout>
        <PageTitle title="Environmental Audio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvironmentalAudio;
