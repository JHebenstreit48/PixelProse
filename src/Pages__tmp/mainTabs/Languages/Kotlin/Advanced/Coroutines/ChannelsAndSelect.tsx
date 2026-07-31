import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
