import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AudioTranslationLayer = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Audio/AudioTranslationLayer';

  return (
    <>
      <PageLayout>
        <PageTitle title="Audio Translation Layer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AudioTranslationLayer;
