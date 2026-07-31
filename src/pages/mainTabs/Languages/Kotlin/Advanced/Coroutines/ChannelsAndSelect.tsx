import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ChannelsAndSelect = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Coroutines/ChannelsAndSelect';

  return (
    <>
      <PageLayout>
        <PageTitle title="Channels & Select" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChannelsAndSelect;
